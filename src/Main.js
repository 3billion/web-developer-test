import DivCon from "./components/DivCon";
import EachAni from "./components/EachAni";
import Grid from "./elements/Grid";
import theme from "./styles/theme";

const Main = () => {
  return (
    <Grid
      width="1110px"
      is_flex={{ just_con: "space-between" }}
      margin="0 auto 0 auto"
    >
      <Grid width="630px" is_flex flex_wrap>
        <EachAni src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0" />
        <EachAni src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0" />
        <EachAni src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0" />
        <EachAni src="https://dl.dropboxusercontent.com/s/wcie3tv697c8s0z/puppy.png?dl=0" />
      </Grid>

      <DivCon />
    </Grid>
  );
};

export default Main;
