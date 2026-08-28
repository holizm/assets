[
    { $match: { returnedDate: { $exists: false } } },
    { $count: 'count' },
]
