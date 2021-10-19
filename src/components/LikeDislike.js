import React from "react";
import { useSelector } from "react-redux";
import Grid from "../elements/Grid";
import theme from "../styles/theme";
import EachAni from "./EachAni";

const LikeDislike = (props) => {
  const { value } = props;
  const word = value === "like" ? "좋아요" : "싫어요";
  const color = value === "like" ? theme.color.blue : theme.color.red;
  const arr = useSelector((state) =>
    value === "like" ? state.animal.like : state.animal.dislike
  );
  return (
    <Grid
      width={theme.size.big_like_ho}
      min_height={theme.size.big_like_ver}
      border={{ border_line: "2px", color }}
    >
      <Grid
        width="100px"
        margin="47px auto 47px auto"
        font_size="24px"
        color={color}
        bold="700"
      >
        {word}
      </Grid>
      <EachAni
        value={true}
        margin="0 auto 30px auto"
        src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0"
      />
      <EachAni
        value={true}
        margin="0 auto 30px auto"
        src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0"
      />
    </Grid>
  );
};

export default LikeDislike;
