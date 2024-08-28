# Distress - AI-Powered Emergency Response App

Distress is a personal safety application designed to quickly and discreetly alert authorities and selected contacts in case of an emergency. With an intuitive and subtle interface, the app allows users to send a distress signal, sharing their real-time location through Google Maps and an in-app map. The app is designed with a strong emphasis on user discretion, ensuring that help can be summoned without drawing unnecessary attention from potential assailants.



## Key Features

• Quick Distress Signal: Users can send an emergency alert to authorities and selected contacts with a single tap.
• Real-Time Location Sharing: The app shares the user's current location via Google Maps and an in-app map.
• AI-Driven Route Prediction: Our unique AI feature predicts potential routes the user might take when in distress, helping responders track them more accurately.
• Discreet Design: The app is designed to be easily hidden during critical situations to avoid attracting attention.
• Escalation to Authorities: Alerts can be escalated to relevant authorities to ensure timely intervention.



## Technologies Used

• Frontend: React
• Mobile App: React Native
• Mapping: Google Maps API, In-App Map
• AI for Route Prediction: Custom AI model using real-time geographical data


## Installation and Setup

Clone the Repository:

git clone https://github.com/yourusername/distress-app.git
Install Dependencies: Navigate to the project directory and run:

npm install
Run the App: For the web application:

npm start
For the mobile application, follow the React Native setup instructions for your platform (iOS/Android).

Environment Variables: Create a .env file in the root directory and add the following:

REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_BACKEND_API_URL=your_backend_api_url

## Usage

• Sending a Distress Signal: Open the app, tap the distress button to send an alert. The app will share your real-time location and predicted routes with selected contacts and authorities.
• Hiding the App: Use the subtle design features to discreetly hide the app when necessary.
• Escalating Alerts: In the settings, configure automatic escalation to authorities when an alert is triggered.

## Contributing
We welcome contributions! Please follow these steps:

• Fork the repository.
• Create a new branch (git checkout -b feature/your-feature).
• Make your changes and commit them (git commit -m 'Add some feature').
• Push to the branch (git push origin feature/your-feature).
• Open a Pull Request.

