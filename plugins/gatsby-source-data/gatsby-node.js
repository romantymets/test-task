const POST_NODE_TYPE = `Wines`;
exports.sourceNodes = async ({
                               actions,
                               createContentDigest,
                               createNodeId,
                               getNodesByType,
                               allWines
                             }) => {
  const { createNode } = actions;
  const data = {
    wines: [
      {
        points: "87",
        title: "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
        img:"https://images.vivino.com/thumbs/R1yvUp0EQPKIZMwYwL6I-A_150x200.jpg",
        description: "Much like the regular bottling from 2012, this comes across as rather rough and tannic, with rustic, earthy, herbal characteristics. Nonetheless, if you think of it as a pleasantly unfussycountrywine, it's a good companion to a hearty winter stew.",
        taster_name: "Paul Gregutt",
        taster_twitter_handle: "@paulgwine\u00a0",
        price: 65,
        designation: "Vintner's Reserve Wild Child Block",
        variety: "Pinot Noir",
        region_1: "Willamette Valley",
        region_2: "Willamette Valley",
        province: "Oregon",
        country: "US",
        winery: "Sweet Cheeks"
      },
      {
        points: "87",
        title: "Bianchi 2011 Signature Selection Merlot (Paso Robles)",
        img:"https://www.wine-searcher.com/images/labels/01/63/bianchi-signature-selection-plummer-vineyard-petite-sirah-10330163.jpg",
        description: "This wine from the Geneseo district offers aromas of sour plums and just enough cigar box to tempt the nose. The flavors are a bit flat at first, then the acidity and tension of sour cherries emerges in the midpalate, bolstered by some black licorice.",
        taster_name: "Matt Kettmann",
        taster_twitter_handle: "@mattkettmann",
        price: 22,
        designation: "Signature Selection",
        variety: "Merlot",
        region_1: "Paso Robles",
        region_2: "Central Coast",
        province: "California",
        country: "US",
        winery: "Bianchi"
      },
      {
        points: "87",
        title: "Castello di Amorosa 2011 King Ridge Vineyard Pinot Noir (Sonoma Coast)",
        img:"https://spectrumwine.blob.core.windows.net/wine-test/eb1d06d9-309e-4004-92f1-e65cc1d3765a.jpg",
        description: "Oak and earth intermingle around robust aromas of wet forest floor in this vineyard-designated Pinot that hails from a high-elevation site. Small in production, it offers intense, full-bodied raspberry and blackberry steeped in smoky spice and smooth texture.",
        taster_name: "Virginie Boone",
        taster_twitter_handle: "@vboone",
        price: 69,
        designation: "King Ridge Vineyard",
        variety: "Pinot Noir",
        region_1: "Sonoma Coast",
        region_2: "Sonoma",
        province: "California",
        country: "US",
        winery: "Castello di Amorosa"
      },
      {
        points: "86",
        title: "Erath 2010 Hyland Pinot Noir (McMinnville)",
        img:"https://greatnorthwestwine.com/wp-content/uploads/2013/01/hyland-2010-pinot-noir.jpg",
        description: "As with many of the Erath 2010 vineyard designates, this is strongly herbal. The notes of leaf and herb create somewhat unripe flavor impressions, with a touch of bitterness on the finish. The fruit just passes the ripeness of sweet tomatoes.",
        taster_name: "Paul Gregutt",
        taster_twitter_handle: "@paulgwine\u00a0",
        price: 50,
        designation: "Hyland",
        variety: "Pinot Noir",
        region_1: "McMinnville",
        region_2: "Willamette Valley",
        province: "Oregon",
        country: "US",
        winery: "Erath"
      },
      {
        points: "86",
        title: "Okapi 2013 Estate Cabernet Sauvignon (Napa Valley)",
        img:"https://shop.okapiwines.com/assets/images/products/pictures/2013OkapiCabimage1.png",
        description: "Syrupy and dense, this wine is jammy in plum and vanilla, with indeterminate structure and plenty of oak. Ripe and full-bodied, it has accents of graphite and leather.",
        taster_name: "Virginie Boone",
        taster_twitter_handle: "@vboone",
        price: 100,
        designation: "Estate",
        variety: "Cabernet Sauvignon",
        region_1: "Napa Valley",
        region_2: "Napa",
        province: "California",
        country: "US",
        winery: "Okapi"
      },
      {
        points: "86",
        title: "Ram 2014 Alder Ridge Vineyard Cabernet Franc (Columbia Valley (WA))",
        img:"https://images.vivino.com/labels/nbt1t-wNTNydF4WtuyMjQQ.jpg",
        description: "The aromas are brooding, with notes of barrel spice and cherry. The flavors are tart and elegant in style, with lightly gritty tannins backing them up. Best suited to the dinner table.",
        taster_name: "Sean P. Sullivan",
        taster_twitter_handle: "@wawinereport",
        price: 25,
        designation: "Alder Ridge Vineyard",
        variety: "Cabernet Franc",
        region_1: "Columbia Valley (WA)",
        region_2: "Columbia Valley",
        province: "Washington",
        country: "US",
        winery: "Ram"
      },
      {
        points: "86",
        title: "Sevtap 2015 Golden Horn Sauvignon Blanc (Santa Ynez Valley)",
        img:"https://images.vivino.com/labels/boHH6LdYTFiuBI-NKNSNdw.jpg",
        description: "There are intriguing touches to the nose of this bottling, with jasmine, sea salt, wet hay, quinine and rainy sidewalk. The structure on the sip is quite delicate, with golden apple and honey flavors.",
        taster_name: "Matt Kettmann",
        taster_twitter_handle: "@mattkettmann",
        price: 26,
        designation: "Golden Horn",
        variety: "Sauvignon Blanc",
        region_1: "Santa Ynez Valley",
        region_2: "Central Coast",
        province: "California",
        country: "US",
        winery: "Sevtap"
      },
      {
        points: "86",
        title: "Basel Cellars 2013 Inspired Red (Columbia Valley (WA))",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HoR2rv9MYcg25rBx2RGN4MqXgwGT6nnpRrzDfot_s36gV75TG93vM8OZPhzcWZFyRgg&usqp=CAU",
        description: "A blend of Merlot and Cabernet Franc, this wine brings disjointed lightly volatile aromas of wood spice, vanilla and cherry. The plump cherry flavors are rounded out by woody barrel notes.",
        taster_name: "Sean P. Sullivan",
        taster_twitter_handle: "@wawinereport",
        price: 46,
        designation: "Inspired",
        variety: "Bordeaux-style Red Blend",
        region_1: "Columbia Valley (WA)",
        region_2: "Columbia Valley",
        province: "Washington",
        country: "US",
        winery: "Basel Cellars"
      },
      {
        points: "86",
        title: "Eco Terreno 2013 Old Vine Cabernet Sauvignon (Alexander Valley)",
        img:"http://storage.googleapis.com/cdn.vinoshipper.com/wine/23049/07188180-662b-427d-865b-fef802f91512.jpg",
        description: "Big oak defines this robustly dense and extracted red, swimming in vanilla and cherry flavor. Full-bodied and gravelly in texture, it's a rustically pleasant wine for pizza nights and crowds.",
        taster_name: "Virginie Boone",
        taster_twitter_handle: "@vboone",
        price: 40,
        designation: "Old Vine",
        variety: "Cabernet Sauvignon",
        region_1: "Alexander Valley",
        region_2: "Sonoma",
        province: "California",
        country: "US",
        winery: "Eco Terreno"
      },
      {
        points: "86",
        title: "Hindsight 2012 Estate Grown Petite Sirah (Calistoga)",
        img:"https://www.wine-searcher.com/images/labels/30/67/10883067.jpg",
        description: "This is the producer's first release of this wine. Fruity aromas of plum and tart cranberry add to its overall sense of lightness and understatement.",
        taster_name: "Virginie Boone",
        taster_twitter_handle: "@vboone",
        price: 55,
        designation: "Estate Grown",
        variety: "Petite Sirah",
        region_1: "Calistoga",
        region_2: "Napa",
        province: "California",
        country: "US",
        winery: "Hindsight"
      },
    ]
  };
  // loop through data and create Gatsby nodes
  data.wines.forEach(wine =>
    createNode({
      ...wine,
      id: createNodeId(`${POST_NODE_TYPE}-${wine.title}`),
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(wine),
        contentDigest: createContentDigest(wine),
      },
    })
  );
  return
};