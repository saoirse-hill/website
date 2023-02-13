import { extendTheme } from "@chakra-ui/react";

import config from "./config";
import styles from "./styles"
import { Link, Card } from "./components";

const theme = {
  config,
  styles,
  components: {
    Link,
    Card,
  },
};

export default extendTheme(theme);
