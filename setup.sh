# SNAPSHOT
liquibase --output-file=mySnapshot.json snapshot --snapshot-format=json

# DIFF
liquibase diff --format=json
liquibase diff --format=json --reference-url="offline:mongodb?snapshot=mySnapshot.json"

# DRIFT REPORT
liquibase --report-enabled=true --report-path=reports diff --format=json
liquibase --report-enabled=true --report-path=reports diff --format=json --reference-url="offline:mongodb?snapshot=mySnapshot.json"
