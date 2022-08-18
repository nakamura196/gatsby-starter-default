aws s3 sync public s3://hi-lab --profile hi-aws
aws cloudfront create-invalidation --distribution-id E1SIM3NJSD6GUF --paths "/*" --profile hi-aws