import LikeDislike from "./components/LikeDislike";
import Grid from "./elements/Grid";

const Classification = () => {
  return (
    <Grid
      width="1110px"
      margin="30px auto 0 auto"
      is_flex={{
        just_con: "space-between",
      }}
    >
      <LikeDislike value="like" />
      <LikeDislike value="dislike" />
    </Grid>
  );
};

export default Classification;
