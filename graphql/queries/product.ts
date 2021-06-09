import { gql } from '@apollo/client'

export const GET_PRODUCT = gql`
  query Product(
    $sku: String!
    $locale: Locale!
    $currency: Currency!
    $country: Country
    $where: String!
    $skus: [String!]
  ) {
    product(sku: $sku) {
      id
      masterData {
        published
        current {
          name(locale: $locale)
          description(locale: $locale)
          slug(locale: $locale)
          categories {
            name(locale: $locale)
            slug(locale: $locale)
          }
          variant(sku: $sku) {
            ...Variant
          }
          masterVariant {
            ...Variant
          }
          allVariants(skus: $skus) {
            ...Variant
          }
        }
      }
    }

    inventoryEntries(where: $where) {
      results {
        id
        quantityOnStock
        availableQuantity
      }
    }
  }

  fragment Variant on ProductVariant {
    id
    sku
    prices {
      id
      country
      value {
        centAmount
        fractionDigits
        currencyCode
      }
      discounted {
        value {
          centAmount
          fractionDigits
          currencyCode
        }
      }
    }

    price(currency: $currency, country: $country) {
      id
      country
      value {
        centAmount
        fractionDigits
        currencyCode
      }
      discounted {
        value {
          centAmount
          fractionDigits
          currencyCode
        }
      }
    }

    images {
      url
    }

    attributesRaw {
      name
      value
      attributeDefinition {
        name
        label(locale: $locale)
      }
    }
  }
`
