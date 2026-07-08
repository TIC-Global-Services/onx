import { NextResponse } from "next/server";

export async function GET() {
  const shop = process.env.STORE_NAME;
  const apiVersion = process.env.API_VERSION;
  const apiKey = process.env.API_KEY;

  if (!shop || !apiVersion || !apiKey) {
    return NextResponse.json(
      { error: "Missing Shopify configuration in environment variables" },
      { status: 500 }
    );
  }

  const url = `https://${shop}.myshopify.com/api/${apiVersion}/graphql.json`;

  const query = `
    query getFiveProducts {
      products(first: 5) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": apiKey,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Shopify API responded with status ${response.status}: ${errorText}` },
        { status: response.status }
      );
    }

    const json = await response.json();
    return NextResponse.json(json.data || json);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch from Shopify" },
      { status: 500 }
    );
  }
}
