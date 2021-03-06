const follow = function (userId) {
  sendReq(
    'GET',
    `/user/follow/${userId}`,
    (followDetails) => {
      const { followed, followersCount } = JSON.parse(followDetails);
      document.getElementById(
        'followers'
      ).innerText = `${followersCount} followers`;
      if (followed) {
        document.getElementById('follow').innerText = 'Following';
      } else {
        document.getElementById('follow').innerText = 'Follow';
      }
      window.location.reload();
    },
    null
  );
};

const selectMenu = function (selectedMenu) {
  selectedMenu.classList.add('selected');
};
