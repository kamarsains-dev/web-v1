import { toast } from "sonner"
import { Check, XCircle, AlertTriangle, Info, Zap } from "lucide-react"

export const customToast = {
  success: (message: string) => {
    toast.success(message, {
      icon: <Check size={18} strokeWidth={3} className="text-green-600 mr-1" />
    })
  },
  
  error: (message: string) => {
    toast.error(message, {
      icon: <XCircle className="w-5 h-5 text-red-600" />
    })
  },
  
  warning: (message: string) => {
    toast.warning(message, {
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />
    })
  },
  
  info: (message: string) => {
    toast.info(message, {
      icon: <Info className="w-5 h-5 text-blue-600" />
    })
  },

  // ✨ Custom buat Kamar Sains theme!
  thunder: (message: string) => {
    toast.success(message, {
      icon: <Zap className="w-5 h-5 text-yellow-500" />
    })
  }
}