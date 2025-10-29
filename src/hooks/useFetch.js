import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from "react";

// Response: (200 OK)
// Errors: 500 — Failed to fetch cars