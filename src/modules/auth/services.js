export const login = async (data) => {
    const { email, password } = data;
    const response = await fetch('process.env.API_URL/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const result = await response.json();

    if(result.status.code === 200){
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        return result;
    }

};