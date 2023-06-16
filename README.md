# Nuxt3 + Firebase Web Framework Issue Reproduction

See: https://github.com/firebase/firebase-tools/issues/5995

This repo is a minimum reproduction example for an issue with Nuxt3 and Firebase Web Frameworks

Namely, when deploying the SSR function, the first deployment will succeed.

However, subsequent deployments fail with a checksum error (it appears that the root cause is a packaging error).
