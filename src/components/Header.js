import React from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";

const Header = () => {
  return (
    <Grid
      is_flex={{ just_con: "center", align_item: "center" }}
      bold="700"
      bg={theme.color.black}
      color={theme.color.white}
      width="1110px"
      height="83px"
      margin="60px auto 0 auto"
    >
      내가 좋아하는 동물
    </Grid>
  );
};

export default Header;
