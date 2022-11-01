## Description

[URL](https://d3irm2gpt34l4z.cloudfront.net/)
[Back-End Repo](https://github.com/karlpawlowicz/dwelling-service)

### Process

I began by reviewing the brief and requirements. In a real-world setting, at this stage, I would have had discussions with various stakeholders, such as an engineering and product manager.

Once I understood what I was building, I would draft a proposal in a design doc or RFC.

The requirement for this exercise was to use React, so I built a Next.js (TypeScript) app on AWS (CloudFront, S3).

I added a CI/CD pipeline using GitHub Actions that lints, tests, builds, and deploys the app as a static asset to S3 on each push.

I did not implement the number input error handling in the design and opted for a browser implementation. I also want to note that the consensus for a credit card field implementation is a `tel` input: https://stackoverflow.com/questions/48534229/what-is-the-correct-input-type-for-credit-card-numbers.

### Sample PRs

- [https://github.com/karlpawlowicz/dwelling-app/pull/4](feat: add form)

### If I Had More Time

- More tests—unit and e2e (Cypress)
- Preview environments—each branch should have a preview URL (currently only dev and prod environment)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
