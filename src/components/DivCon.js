import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import Grid from "../elements/Grid";
import theme from "../styles/theme";

const DivCon = () => {
  const likeArr = useSelector((state) => state.animal.like);
  const dislikeArr = useSelector((state) => state.animal.dislike);

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
          {likeArr.map((each, index) => {
            return (
              <Grid
                id={index}
                width="100px"
                height="50px"
                bold="700"
                font_size="24px"
                color={theme.color.blue}
              >
                {each}
              </Grid>
            );
          })}
          {dislikeArr.map((each, index) => {
            return (
              <Grid
                id={index}
                width="100px"
                height="50px"
                bold="700"
                font_size="24px"
                color={theme.color.red}
              >
                {each}
              </Grid>
            );
          })}
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
        _onClick={() => history.push("/classification")}
      >
        좋아하는 동물들 나누기
      </Grid>
    </Grid>
  );
};

export default DivCon;
