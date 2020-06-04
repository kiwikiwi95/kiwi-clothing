import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsForOverview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.values(collections) : []
);

export const selectShopCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopCollections],
  collections => !!collections
);