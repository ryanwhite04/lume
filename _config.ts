import lume from "lume/mod.ts";
import shiraha from "shiraha/mod.ts";

const site = lume();

site.use(shiraha());

export default site;
