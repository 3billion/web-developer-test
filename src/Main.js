import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EachAni from "./components/EachAni";
import DivCon from "./components/DivCon";

import Grid from "./elements/Grid";
import { actionGetData } from "./redux/modules/animal";

const Main = () => {
  const animal = useSelector((state) => state.animal.animal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetData());
  }, []);

  return (
    <Grid
      width="1110px"
      is_flex={{ just_con: "space-between" }}
      margin="0 auto 0 auto"
    >
      <Grid width="630px" is_flex flex_wrap>
        {animal?.map((each, index) => {
          return <EachAni id={index} name={each.name} src={each.img_url} />;
        }) ?? "정보가 없습니다"}
      </Grid>

      <DivCon />
    </Grid>
  );
};

export default Main;
