const btn = document.getElementById('btn');
const liffId = '1657229309-Oml6AgRK';
let userId = '';
let pictureUrl = '';
let displayName = '';

function main() {
  // 1.liff init
  // 2.get profile
  liff.init({ liffId: liffId });
  liff.ready.then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    liff.getProfile().then((profile) => {
      userId = profile.userId;
      pictureUrl = profile.pictureUrl;
      displayName = profile.displayName;
      document.getElementById('pictureUrl').src = profile.pictureUrl;
      document.getElementById('displayName').innerHTML = profile.displayName;
      console.log(profile);
    });
  });
}

main();

async function send(e) {
  e.preventDefault();
  const prsno = document.getElementById('prsno').value;
  const pwd = document.getElementById('pwd').value;

  fireSweetAlert();
  // 3. axios post data
  // try {
  //     const result = await axios.post(
  //         "https://68fc-110-49-90-2.ngrok.io/v1/register", {
  //             prsno: prsno,
  //             pwd: pwd,
  //             fullname: '',
  //             userId: userId,
  //             pictureUrl: pictureUrl,
  //             displayName: displayName,
  //             liffId: liffId,
  //         }
  //     )
  //     if (result.status == 200) {
  //         liff.closeWindow();
  //     }else{
  //         fireSweetAlert()
  //     }
  // } catch (error) {
  //     console.log(error)
  // }
}

function fireSweetAlert() {
  Swal.fire('Good job!', 'You clicked the button!', 'success');
}

// https://tall-trains-search-49-237-22-19.loca.lt/v1/register
// https://api-flask.jaymart.org/api/lineoa/v1/register
