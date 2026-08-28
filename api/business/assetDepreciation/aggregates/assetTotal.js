[
    { $match: { asset } },
    {
        $group: {
            _id: null,
            total: { $sum: '$depreciationAmount' },
        },
    },
]
