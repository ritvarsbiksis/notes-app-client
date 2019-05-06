export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'rb-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://he84dddyv8.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_kT0scSNSW',
    APP_CLIENT_ID: '587cggrhjfplm8plqbqd0ndbhs',
    IDENTITY_POOL_ID: 'us-east-1:5ef2497b-c316-43f9-acd6-1f2f9a26010b'
  }
}
