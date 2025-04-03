'use client';

// Libraries
import axios, { AxiosInstance } from "axios";
import { getCurrentUser } from "aws-amplify/auth";

// Constants
import AMPLIFY_CONFIG from "@/amplify_outputs.json";

const getAccessToken: () => Promise<string | null> = async () => {
  const currentUser = await getCurrentUser();
  const localStorageKey = `CognitoIdentityServiceProvider.${AMPLIFY_CONFIG.auth.user_pool_client_id}.${currentUser.username}.accessToken`;
  return localStorage.getItem(localStorageKey);
};

export const getServerInstance: () => Promise<AxiosInstance> = async () => {
  const config = {
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
      'Content-type': 'application/json',
    }
  };
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axios.create(config);
};
