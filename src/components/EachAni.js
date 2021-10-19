import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { actionDislikeClick, actionLikeClick } from "../redux/modules/animal";
import theme from "../styles/theme";

const EachAni = (props) => {
  const { src, name, margin, value } = props;
  const likeArr = useSelector((state) => state.animal.like);
  const dislikeArr = useSelector((state) => state.animal.dislike);
  const dispatch = useDispatch();
  let likeValue = likeArr.find((each) => each === name) ? true : false;
  let dislikeValue = dislikeArr.find((each) => each === name) ? true : false;

  const handleClickLike = () => {
    dispatch(actionLikeClick(name));
  };
  const handleClickDislike = () => {
    dispatch(actionDislikeClick(name));
  };
  return (
    <Grid
      is_flex={{ direction: "column" }}
      width={theme.size.picture_size}
      margin={margin}
    >
      <Image
        src={src}
        width={theme.size.picture_size}
        height={theme.size.picture_size}
      />
      {!value && (
        <Grid
          margin="15px 0 0 0"
          is_flex={{ just_con: "space-between", align_item: "center" }}
        >
          {likeValue ? (
            <Grid
              font_size="10px"
              bg={theme.color.blue}
              color={theme.color.white}
              is_flex={{ just_con: "center", align_item: "center" }}
              width={theme.size.btn_ho}
              height={theme.size.btn_ver}
              _onClick={handleClickLike}
              cursor
            >
              좋아요
            </Grid>
          ) : (
            <Grid
              font_size="10px"
              is_flex={{ just_con: "center", align_item: "center" }}
              width={theme.size.btn_ho}
              height={theme.size.btn_ver}
              border={{ border_line: "1px", color: theme.color.gray }}
              _onClick={handleClickLike}
              cursor
            >
              좋아요
            </Grid>
          )}
          {dislikeValue ? (
            <Grid
              font_size="10px"
              bg={theme.color.red}
              color={theme.color.white}
              is_flex={{ just_con: "center", align_item: "center" }}
              width={theme.size.btn_ho}
              height={theme.size.btn_ver}
              _onClick={handleClickDislike}
              cursor
            >
              싫어요
            </Grid>
          ) : (
            <Grid
              font_size="10px"
              is_flex={{ just_con: "center", align_item: "center" }}
              width={theme.size.btn_ho}
              height={theme.size.btn_ver}
              border={{ border_line: "1px", color: theme.color.gray }}
              _onClick={handleClickDislike}
              cursor
            >
              싫어요
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
};

EachAni.defaultProps = {
  margin: "30px 30px 0 0",
};

export default EachAni;
