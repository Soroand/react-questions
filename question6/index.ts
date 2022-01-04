// LAZY WAY
// I would first of all move url into an .env file
// I would modify axios request to become more elegant and easier to read
// It would be nice to create services for 'set and get' items from local localStorage
// in a separate file so that we don't have to write all this mess every single time

// IN BETWEEN WAY
// create context and move all the useStates in there, easy to set up, available everywhere
// move try-catch or entire userLogin and into separate service, plus all of the above solutions.
// Canno't think of enything else without seeing entire 'useAuthProvide' function

//RADICAL WAY
// Depending on the app and the use case I would consider moving accessToken, userId, tenantId etc
// to a state management such as Redux so that data would be available everywhere and persisted.
// Persist library will replace a need for calling local storage in the code like the one below.
// The best approach here would be to use Redux Saga combination so we can separate
// all the concerns we have in this file
// All useState's will handled by redux, 'userLogin' will be moved to a separate services
// and called from Saga, all the setUserId, setAccessToken etc will be handled by the reducer

const useAuthProvide = () => {
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('access_token'),
  );
  const history = useHistory();
  const userLogin = async (
    email: string,
    password: string,
    redirectPath: string,
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: `https://domain.com/api/login`,
        data: {
          email,
          password,
        },
      });
      if (response.data) {
        console.log(JSON.stringify(response.data, null, 2));
        if (response.data.type !== 'tenant') {
          alert('Unauthorized User');
        } else {
          window.localStorage.setItem('userId', response.data.userId);
          setUserId(response.data.userId);
          window.localStorage.setItem('tenantId', response.data.tenantId);
          setTenantId(response.data.tenantId);
          console.log('tenantId:' + tenantId);
          window.localStorage.setItem(
            'access_token',
            response.data.accessToken,
          );
          setAccessToken(response.data.accessToken);
          history.push(redirectPath);
        }
      }
    } catch (e) {
      alert('Error Happened');
    }
  };

