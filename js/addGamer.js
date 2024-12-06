



function creatByForm() {
    Swal.fire({
        title: "Choisir un nom",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
          placeholder: "Choisir un nom",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            axios.post('/user', {
              firstName: 'Fred',
              lastName: 'Flintstone'
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
            console.log('login', login);
            const githubUrl = `https://api.github.com/users/${login} `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}`);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
}


document.querySelectorAll('.gamerChoise').forEach(
    (element) => {
            element.addEventListener('click', creatByForm);
        }
);