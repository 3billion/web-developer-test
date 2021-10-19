import axios from "axios";

const api = axios.create({
  baseURL: "https://script.googleusercontent.com/",
});

export const animalApi = {
  getAll: () =>
    api.get(
      "/macros/echo?user_content_key=WiZ822QIJLuDmmGuXxb1Jc_s90McW59OHAId873d4Ewks125S6NSVKVOSB-cQ42nPFmKQRS36z266rnoCHHqTPcmoBgWeKAGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA"
    ),
};
