# Run the software in development mode
run-dev:
	npm start ./src/

# Run the tests
run-tests:
	npm run test

# Build the application
run-build: run-tests 
	npm run build