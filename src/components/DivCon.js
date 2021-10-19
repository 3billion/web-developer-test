import React from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";

const DivCon = () => {
  return (
    <Grid
      width={theme.size.div_ho}
      is_flex={{
        direction: "column",
      }}
    >
      <Grid
        width={theme.size.div_ho}
        height={theme.size.div_ver}
        border={{ border_line: "1px", color: theme.color.black }}
        margin="30px 0 0 0"
      >
        <Grid
          margin="auto"
          is_flex={{
            direction: "column",
            just_con: "center",
            align_item: "center",
          }}
        >
          <Grid width="100px" height="50px" bold="700" font_size="24px">
            반복문
          </Grid>
        </Grid>
      </Grid>
      <Grid
        margin="30px 0 0 0"
        bg={theme.color.gray}
        bold="700"
        is_flex={{ just_con: "center", align_item: "center" }}
        color={theme.color.black}
        width={theme.size.div_ho}
        height={theme.size.div_ver_word}
        font_size="24px"
      >
        좋아하는 동물들 나누기
      </Grid>
    </Grid>
  );
};

export default DivCon;
