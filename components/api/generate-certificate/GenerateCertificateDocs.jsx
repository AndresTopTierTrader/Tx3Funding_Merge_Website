'use client'

import React, { useState, useEffect } from 'react';
import {API_URL} from '@/constants/global';
import { FaRegCopy, FaSpinner, FaLock, FaUnlock, FaTimesCircle } from "react-icons/fa";

const ApiDocumentation = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [copied, setCopied] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        token: ''
    });

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAuthentication = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAuthError('');

        // Simulate API call with setTimeout
        setTimeout(() => {
            if (
                credentials.username === "red-acre-external-user" &&
                credentials.password === "ad18afa6-2e10-4c72-83cd-f7eb57c67590" &&
                credentials.token === "8837b8e7-8cc8-41a3-8e3b-0bc90aceb1ca"
            ) {
                setIsAuthenticated(true);
            } else {
                setAuthError('Invalid credentials. Please try again.');
            }
            setIsLoading(false);
        }, 3000); // 3 seconds loading animation
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <FaLock className="text-blue-600 text-4xl mx-auto mb-2" />
                        <h2 className="text-2xl font-bold text-gray-800">API Documentation Access</h2>
                        <p className="text-gray-600 mt-2">Please enter your credentials to view the documentation</p>
                    </div>

                    {authError && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                            <div className="flex">
                                <FaTimesCircle className="text-red-600 mt-1" />
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">{authError}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleAuthentication}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="username"
                                name="username"
                                type="text"
                                value={credentials.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                name="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="token">
                                Unique Token
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="token"
                                name="token"
                                type="text"
                                value={credentials.token}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <FaUnlock className="mr-2" />
                                    Access Documentation
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Certificate Generation API</h1>
                    <p className="text-gray-600 mt-2">Generate digital certificates for various achievements and payouts</p>
                    <div className="mt-4 flex items-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">POST</span>
                        <span className="text-gray-700 font-mono text-sm">{`${API_URL}/certificates/generate`}</span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex mb-6 border-b">
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'authentication' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('authentication')}
                    >
                        Authentication
                    </button>
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'request' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('request')}
                    >
                        Request
                    </button>
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'response' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('response')}
                    >
                        Response
                    </button>
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'example' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('example')}
                    >
                        Examples
                    </button>
                    <button
                        className={`px-4 py-2 font-medium ${activeTab === 'errors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('errors')}
                    >
                        Errors
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    {activeTab === 'overview' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
                            <p className="text-gray-700 mb-4">
                                This endpoint generates digital certificates in both JPEG and PDF formats. It&apos;s designed to create various
                                types of certificates based on the <code className="bg-gray-100 px-1 py-0.5 rounded">certificateType</code> parameter.
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            Certificate generation requires valid authentication. See the Authentication tab for details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
                            <ul className="list-disc pl-5 text-gray-700 mb-4">
                                <li>Generates certificates with custom recipient names</li>
                                <li>Supports different certificate types with unique backgrounds</li>
                                <li>Includes QR code linking to the certificate validation page</li>
                                <li>Creates both JPEG and PDF versions</li>
                                <li>Returns a unique URL to access the generated certificate</li>
                                <li>Can automatically send email notification to the recipient with certificate details</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'authentication' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Authentication</h2>
                            <p className="text-gray-700 mb-4">
                                All requests to this endpoint require authentication using an API key. The API key must be included in the request body.
                            </p>

                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <div className="flex justify-between">
                                    <h3 className="text-md font-semibold text-gray-800">API Key</h3>
                                    <button
                                        className="text-blue-600 hover:text-blue-800 flex items-center"
                                        onClick={() => copyToClipboard("your_api_key")}
                                    >
                                        {copied ? 'Copied!' : <><FaRegCopy size={16} className="mr-1" /> Copy</>}
                                    </button>
                                </div>
                                <code className="block mt-2 text-sm overflow-x-auto text-gray-700">
                                    your_api_key
                                </code>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">
                                            <strong>Security Note:</strong> Keep your API key secure. Don&apos;t expose it in client-side code or public repositories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'request' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Request Parameters</h2>
                            <p className="text-gray-700 mb-4">
                                The request must be sent as JSON in the request body.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Parameter</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Type</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Required</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">apiKey</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Authentication key for API access</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">certificateType</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Type of certificate to generate (see Certificate Types below)</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">recipientName</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Name of the person receiving the certificate</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">payoutAmount</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Number</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Conditional</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Amount of payout (required for certain certificate types, see table below)</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">certificateId</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String (UUID v4)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Unique identifier for the certificate (must be valid UUID v4)</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">userId</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">User identifier for tracking/analytics</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">userEmail</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Email address to send certificate notification (if provided, an email with certificate details will be sent)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Certificate Types</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Type Value</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Requires PayoutAmount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">affiliatePayout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">For affiliate program payouts</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">fundedTraderPassed</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Used when stage 2 is passed (Pro, Flex, and 1 Phase)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">lifetimePayout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">For lifetime achievement payouts</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">lifetimePayoutBronze</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Bronze tier lifetime payout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">lifetimePayoutSilver</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Silver tier lifetime payout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">lifetimePayoutGold</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Gold tier lifetime payout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">payout</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Standard payout certificate</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Yes</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">plusTier1Passed</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Used when the Pro challenge is passed</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">swingTier1Passed</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Used when the Flex challenge is passed</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'response' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Response</h2>
                            <p className="text-gray-700 mb-4">
                                Upon successful processing, the API returns a JSON response with the following structure:
                            </p>

                            <div className="bg-gray-100 p-4 rounded-md mb-6">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "message": "Certificate generated successfully",
  "certificateId": "30477185-2cf4-4328-9120-c5203eb648f5",
  "certificateUrl": "/certificates/30477185-2cf4-4328-9120-c5203eb648f5"
}`}
                                </pre>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Fields</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Field</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Type</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">message</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Status message indicating successful generation</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">certificateId</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String (UUID)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">The UUID of the generated certificate</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">certificateUrl</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">String</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Relative URL path to access the generated certificate. Full URL example: https://www.toptiertrader.com/certificates/30477185-2cf4-4328-9120-c5203eb648f5 </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'example' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Example Request</h2>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">cURL</h3>
                            <div className="bg-gray-100 p-4 rounded-md mb-6 relative">
                                <button
                                    className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
                                    onClick={() => copyToClipboard(`curl -X POST https://mail.ttt-services.com/generate-certificate \\
-H "Content-Type: application/json" \\
-d '{
  "apiKey": "kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo",
  "userEmail": "natalia@example.com",
  "certificateType": "affiliatePayout",
  "recipientName": "Natalia Betancourt",
  "payoutAmount": 12000.55,
  "certificateId": "30477185-2cf4-4328-9120-c5203eb648f5",
  "userId": "attempt-13-prod"
}'`)}
                                >
                                    {copied ? 'Copied!' : <FaRegCopy size={16} />}
                                </button>
                                <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">
                                    {`curl -X POST ${API_URL}/certificates/generate \\
-H "Content-Type: application/json" \\
-d '{
  "apiKey": "kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo",
  "userEmail": "natalia@example.com",
  "certificateType": "affiliatePayout",
  "recipientName": "Natalia Betancourt",
  "payoutAmount": 12000.55,
  "certificateId": "30477185-2cf4-4328-9120-c5203eb648f5",
  "userId": "attempt-13-prod"
}'`}
                                </pre>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">JavaScript (Fetch)</h3>
                            <div className="bg-gray-100 p-4 rounded-md mb-6 relative">
                                <button
                                    className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
                                    onClick={() => copyToClipboard(`const response = await fetch('https://mail.ttt-services.com/generate-certificate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: 'kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo',
    userEmail: 'jhon@example.com',
    certificateType: 'payout',
    recipientName: 'Jhon Doe',
    payoutAmount: 45000.55,
    certificateId: 'd05c1e6b-1b8e-429f-b48a-bb20a24ace41',
    userId: '429fb48a'
  }),
});

const data = await response.json();
console.log(data);`)}
                                >
                                    {copied ? 'Copied!' : <FaRegCopy size={16} />}
                                </button>
                                <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">
                                    {`const response = await fetch('https://mail.ttt-services.com/generate-certificate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: 'kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo',
    userEmail: 'jhon@example.com',
    certificateType: 'payout',
    recipientName: 'Jhon Doe',
    payoutAmount: 45000.55,
    certificateId: 'd05c1e6b-1b8e-429f-b48a-bb20a24ace41',
    userId: '429fb48a'
  }),
});

const data = await response.json();
console.log(data);`}
                                </pre>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Example With No Payout Amount</h3>
                            <div className="bg-gray-100 p-4 rounded-md mb-6 relative">
                                <button
                                    className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
                                    onClick={() => copyToClipboard(`const response = await fetch('https://mail.ttt-services.com/generate-certificate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: 'kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo',
    userEmail: 'trader@example.com',
    certificateType: 'fundedTraderPassed',
    recipientName: 'Alex Rodriguez',
    certificateId: 'b8e42f51-9c1a-4b76-8d50-a97ef12c5ebd',
    userId: '8d50a97e'
  }),
});

const data = await response.json();
console.log(data);`)}
                                >
                                    {copied ? 'Copied!' : <FaRegCopy size={16} />}
                                </button>
                                <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">
                                    {`const response = await fetch('https://mail.ttt-services.com/generate-certificate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: 'kaGVHeHFCAQtfyTc0lN6C4hJvz0NsQYoxIYLnjMgiDzP22gvgIkzuYiS1JkNiVt9xi5KRF1Bw2bZZNU30OPlfxGBxm89qKSzUoiGvhC3R8evoi0erDhs0evTO9UTHAvo',
    userEmail: 'trader@example.com',
    certificateType: 'fundedTraderPassed',
    recipientName: 'Alex Rodriguez',
    certificateId: 'b8e42f51-9c1a-4b76-8d50-a97ef12c5ebd',
    userId: '8d50a97e'
  }),
});

const data = await response.json();
console.log(data);`}
                                </pre>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Example Response</h3>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "message": "Certificate generated successfully",
  "certificateId": "30477185-2cf4-4328-9120-c5203eb648f5",
  "certificateUrl": "/certificates/30477185-2cf4-4328-9120-c5203eb648f5"
}`}
                                </pre>
                            </div>
                        </div>
                    )}
                    {activeTab === 'errors' && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Error Responses</h2>
                            <p className="text-gray-700 mb-4">
                                The API returns appropriate HTTP status codes and error messages when issues occur. The system uses custom error classes to handle different types of errors.
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            <strong>Note:</strong> When using a certificate type that does not require a payout amount (like <code>fundedTraderPassed</code>),
                                            make sure to either omit the <code>payoutAmount</code> field or set it to an empty string. Including a value may cause validation errors.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Error Type</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Status Code</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Possible Messages</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">ValidationError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">400</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">
                                                <ul className="list-disc pl-4">
                                                    <li>&quot;Invalid certificate ID.&quot;</li>
                                                    <li>&quot;Missing required parameters&quot;</li>
                                                    <li>&quot;User ID and Certificate ID are required&quot;</li>
                                                    <li>&quot;certificateType does not allow a payoutAmount&quot;</li>
                                                    <li>&quot;Certificate with ID already exists&quot;</li>
                                                </ul>
                                            </td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Validation errors occur when input parameters are missing, malformed, or do not meet the required format</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">AuthorizationError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">401</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">&quot;Unauthorized&quot;</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Authentication errors occur when the API key is missing or invalid</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">ResourceNotFoundError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">404</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">&quot;Certificate not found&quot;</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Occurs when attempting to access a certificate that doesn&apos;t exist</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">StorageError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">500</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">
                                                <ul className="list-disc pl-4">
                                                    <li>&quot;Failed to upload [fileType] to Database&quot;</li>
                                                    <li>&quot;Failed to save certificate to database&quot;</li>
                                                </ul>
                                            </td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Occurs when there are issues with Database storage or Database operations</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">CertificateError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">500</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">
                                                <ul className="list-disc pl-4">
                                                    <li>&quot;Internal server error&quot;</li>
                                                    <li>&quot;Unexpected error generating certificate&quot;</li>
                                                    <li>&quot;Error creating certificate image&quot;</li>
                                                    <li>&quot;Failed to fetch certificate&quot;</li>
                                                </ul>
                                            </td>
                                            <td className="py-2 px-4 text-sm text-gray-700">A general error during certificate generation or processing</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-900 font-mono">EmailError</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">500</td>
                                            <td className="py-2 px-4 text-sm text-gray-700 font-mono">
                                                <ul className="list-disc pl-4">
                                                    <li>&quot;Failed to send certificate email&quot;</li>
                                                    <li>&quot;Email service unavailable&quot;</li>
                                                </ul>
                                            </td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Occurs when there are issues sending the certificate notification email</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Common Error Scenarios</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Scenario</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Error Type</th>
                                            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Missing API key</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">AuthorizationError (401)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Include the correct API key in the request body</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Invalid UUID format</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">ValidationError (400)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Ensure the certificateId is a valid UUID v4 format</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Missing recipient name</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">ValidationError (400)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Include the recipientName parameter</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Invalid certificate type</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">ValidationError (400)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Use one of the supported certificate types listed in the documentation</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Incorrect payout amount usage</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">ValidationError (400)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Check certificate type requirements for payout amount inclusion</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Certificate with ID already exists</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">ValidationError (400)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Generate a new UUID for each certificate</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Database storage issues</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">StorageError (500)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Check your network connection and try again</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 text-sm text-gray-700">Email delivery failure</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">EmailError (500)</td>
                                            <td className="py-2 px-4 text-sm text-gray-700">Verify the email address is valid and try again</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Example Error Responses</h3>

                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Validation Error (400)</h4>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "error": "Invalid certificate ID."
}`}
                                </pre>
                            </div>

                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Certificate Type Error (400)</h4>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "error": "certificateType does not allow a payoutAmount"
}`}
                                </pre>
                            </div>

                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Duplicate Certificate Error (400)</h4>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "error": "Certificate with ID 30477185-2cf4-4328-9120-c5203eb648f5 already exists. Please use a unique certificate ID."
}`}
                                </pre>
                            </div>

                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Authorization Error (401)</h4>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "error": "Unauthorized"
}`}
                                </pre>
                            </div>

                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Server Error (500)</h4>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <pre className="text-sm text-gray-800 whitespace-pre">
                                    {`{
  "error": "Internal server error"
}`}
                                </pre>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-blue-700">
                                            <strong>Tip:</strong> For debugging purposes, include a unique userId in each request. This will help in tracking certificate generation issues if they occur.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-green-700">
                                            <strong>Best Practice:</strong> When generating multiple certificates, implement retry logic with exponential backoff to handle temporary server errors. This ensures reliable certificate generation even during high traffic periods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ApiDocumentation;