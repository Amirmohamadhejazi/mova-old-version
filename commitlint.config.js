module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['build', 'chore', 'doc', 'feature', 'fix', 'refactor', 'revert', 'style', 'task', 'test', 'update']
        ]
    }
};
