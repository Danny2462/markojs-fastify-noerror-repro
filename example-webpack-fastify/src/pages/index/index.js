import template from "./index.marko";

export default (req, res) => {
  res.marko(template, {});
};
