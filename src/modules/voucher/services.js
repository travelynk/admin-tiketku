export const getAllVouchers = async () => {
    const endpoint = `${process.env.API_URL}/api/v1/vouchers`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const vouchers = await response.json();

    return vouchers;
};

export const getVoucherById = async (code) => {
    const endpoint = `${process.env.API_URL}/api/v1/vouchers/${code}`;

    const data = {
        totalPrice: 5000000,
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const voucher = await response.json();

    return voucher;
};
