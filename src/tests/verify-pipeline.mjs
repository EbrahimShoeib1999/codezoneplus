import assert from "node:assert";

async function verifyRoutes() {
  const routes = [
    "/ar",
    "/en",
    "/ar/services",
    "/en/services",
    "/ar/pricing",
    "/ar/portfolio",
    "/ar/contact",
    "/ar/about",
    "/ar/faq",
    "/ar/process",
    "/ar/project-deliverables",
  ];

  console.log("=========================================");
  console.log("🌐 CODE ZONE PLUS — ROUTE & CSS VERIFICATION");
  console.log("=========================================\n");

  let totalCssChecked = 0;

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const res = await fetch(url);
    assert.strictEqual(res.status, 200, `Expected 200 for ${route}, got ${res.status}`);
    const html = await res.text();

    // Verify HTML structure
    assert(html.includes("<!DOCTYPE html>"), `${route} missing doctype`);
    assert(html.includes("<html"), `${route} missing <html> tag`);
    assert(html.includes("<body"), `${route} missing <body> tag`);

    // Verify CSS is linked
    const cssMatches = Array.from(html.matchAll(/href="([^"]+\.css[^"]*)"/g)).map((m) => m[1]);
    assert(cssMatches.length > 0, `No stylesheets found on ${route}`);

    for (const cssPath of cssMatches) {
      const cssUrl = `http://localhost:3000${cssPath}`;
      const cssRes = await fetch(cssUrl);
      assert.strictEqual(cssRes.status, 200, `Failed to load CSS ${cssUrl} on ${route}`);
      const cssText = await cssRes.text();
      assert(cssText.length > 1000, `CSS on ${cssUrl} suspiciously small: ${cssText.length}`);
      totalCssChecked++;
    }

    // Verify key classes appear in the HTML
    assert(html.includes("bg-") || html.includes("flex") || html.includes("grid"), `${route} missing Tailwind classes`);

    console.log(`  ✓ PASS: ${route} (Status: 200, Stylesheets: ${cssMatches.length})`);
  }

  // Also verify CSS bundle contains core Tailwind & Brand definitions
  const sampleRes = await fetch("http://localhost:3000/ar");
  const sampleHtml = await sampleRes.text();
  const sampleCssMatches = Array.from(sampleHtml.matchAll(/href="([^"]+\.css[^"]*)"/g)).map((m) => m[1]);
  
  let combinedCss = "";
  for (const p of sampleCssMatches) {
    const r = await fetch(`http://localhost:3000${p}`);
    combinedCss += await r.text();
  }

  console.log("\n--- CSS Content Inspection ---");
  console.log(`Combined CSS length: ${combinedCss.length} bytes`);
  
  const rulesToCheck = [
    { name: "flex layout", test: combinedCss.includes("display:flex") || combinedCss.includes(".flex{") },
    { name: "grid layout", test: combinedCss.includes("display:grid") || combinedCss.includes(".grid{") },
    { name: "brand lime color (#A3E635)", test: combinedCss.includes("#A3E635") || combinedCss.includes("#a3e635") },
    { name: "brand dark background (#0B0F12)", test: combinedCss.includes("#0B0F12") || combinedCss.includes("#0b0f12") },
    { name: "custom utility .lime-glow", test: combinedCss.includes("lime-glow") },
    { name: "custom utility .glass-nav", test: combinedCss.includes("glass-nav") },
    { name: "font-alexandria variable", test: combinedCss.includes("--font-alexandria") },
    { name: "font-ibm-plex-sans-arabic variable", test: combinedCss.includes("--font-ibm-plex-sans-arabic") },
  ];

  for (const check of rulesToCheck) {
    assert(check.test, `CSS bundle missing ${check.name}`);
    console.log(`  ✓ PASS: CSS includes ${check.name}`);
  }

  console.log("\n=========================================");
  console.log(`ALL CHECKS PASSED: ${routes.length} routes, ${totalCssChecked} CSS files verified`);
  console.log("=========================================\n");
}

verifyRoutes().catch((err) => {
  console.error(err);
  process.exit(1);
});
