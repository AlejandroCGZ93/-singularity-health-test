import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as loginApi } from '@/lib/api'

interface AuthState {
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: null
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginApi(email, password)
    localStorage.setItem('token', response.token)
    return response.token
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null
      localStorage.removeItem('token')
    },
    clearError: state => {
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'An error occurred'
      })
  }
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
