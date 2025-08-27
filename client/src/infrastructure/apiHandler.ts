export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export async function apiHandler<T>(apiCall: Promise<any>): Promise<ApiResponse<T>> {
  try {
    const response = await apiCall;
    return {
      success: true,
      message: "ok",
      data: response.data,
    };
  } catch (error: any) {
    let message = "Unexpected error occurred";
    if (error.response) {
      console.log(error)
      message = error.response.data?.detail || "Request failed";
    } else if (error.request) {
      message = "Unable to reach the server. Please try again.";
    }
    return { success: false, message, data: null };
  }
}
