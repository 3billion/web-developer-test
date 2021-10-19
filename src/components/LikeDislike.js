import React from "react";
import { useSelector } from "react-redux";
import Grid from "../elements/Grid";
import theme from "../styles/theme";
import EachAni from "./EachAni";

const LikeDislike = (props) => {
  const { value } = props;
  const word = value === "like" ? "좋아요" : "싫어요";
  const color = value === "like" ? theme.color.blue : theme.color.red;
  const animal = useSelector((state) => state.animal.animal);
  const nameArr = useSelector((state) =>
    value === "like" ? state.animal.like : state.animal.dislike
  );

  const newAnimal = [];
  animal.forEach((each) => {
    nameArr.forEach((each_inner) => {
      each_inner === each.name && newAnimal.push(each);
    });
  });

  console.log(newAnimal);

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
      {newAnimal?.map((each, index) => {
        return (
          <EachAni
            id={index}
            value={true}
            margin="0 auto 30px auto"
            src={each.img_url}
          />
        );
      })}
    </Grid>
  );
};

export default LikeDislike;
