import { shopifyFetch } from "@/services/shopify/client";
import type { ShopifyMenu } from "@/types/shopify";

type MenuQueryData = {
  menu: {
    handle: string;
    id: string;
    items: ShopifyMenu["items"];
    title: string;
  } | null;
};

const MENU_QUERY = `
  query MenuByHandle($handle: String!) {
    menu(handle: $handle) {
      handle
      id
      title
      items {
        id
        resourceId
        tags
        title
        type
        url
        items {
          id
          resourceId
          tags
          title
          type
          url
          items {
            id
            resourceId
            tags
            title
            type
            url
          }
        }
      }
    }
  }
`;

export async function getMenuByHandle(handle: string): Promise<ShopifyMenu | null> {
  const data = await shopifyFetch<MenuQueryData, { handle: string }>({
    query: MENU_QUERY,
    tags: ["shopify-menu", handle],
    variables: { handle }
  });

  return data.menu;
}
