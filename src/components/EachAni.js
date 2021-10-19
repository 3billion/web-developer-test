import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import theme from "../styles/theme";

const EachAni = (props) => {
  const { src, id, margin, value } = props;

  const handleClickLike = () => {};
  const handleClickDislike = () => {};
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
        </Grid>
      )}
    </Grid>
  );
};

EachAni.defaultProps = {
  margin: "30px 30px 0 0",
};

export default EachAni;
