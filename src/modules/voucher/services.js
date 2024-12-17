export const getAllVouchers = async (token) => {
    const endpoint = `${process.env.API_URL}/api/v1/vouchers`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const vouchers = await response.json();

    return vouchers;
};

export const getVoucherById = async (id, token) => {
    const endpoint = `${process.env.API_URL}/api/v1/vouchers/${id}`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const voucher = await response.json();

    return voucher;
};
