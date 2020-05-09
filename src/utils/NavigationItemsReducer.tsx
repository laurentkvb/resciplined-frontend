import { NavigationItemModel } from "@models/NavigationItemModel";
import { NodeModel } from "@models/NodeModel";

export const navigationItemsReducer = (items: NodeModel[], includeHome = false) => {
  const result : NavigationItemModel[] = [];
  let contact = null;

  if (includeHome) {
  // Home is always the first element
    result.push({ title: "Home", slug: "/" });
  }

    items?.forEach((value: NodeModel) => {
      if (value.node.slug && value.node.slug === "contact") {
        contact = value.node;
      } else if (value.node.slug && !value.node.slug.includes("/")) {
        result.push(value.node);
      }
    });

    // Contact page is always the last element
    if (contact !== null) {
      result.push(contact);
    }


    return result;
};
