import create from 'zustand';

// Define the interface for the store's state
interface LoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create the Zustand store
const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false, // Initial state

  // Action to set the loading state
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));

export default useLoadingStore;