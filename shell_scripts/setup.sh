#!/bin/bash

npm install

cat <<EOF > .git/hooks/pre-commit  
 npm run preCommit
if [ \$? != 0 ]; then 
    exit 1
fi
EOF

chmod +x .git/hooks/pre-commit  

cat <<EOF > .git/hooks/pre-push  
npm run preCommit 
if [ \$? != 0 ]; then 
    exit 1
fi
EOF

chmod +x .git/hooks/pre-push
mkdir -p database/images

