import { SkeletonBlock } from "./SkeletonBlock"

export const PageSkeleton = () => {
  return (
    <div className="min-h-screen p-6 space-y-10 max-w-5xl mx-auto animate-fade">

      <div className="flex justify-between items-center">
        <SkeletonBlock className="h-8 w-32" />
        <SkeletonBlock className="h-8 w-52" />
      </div>

      <div className="space-y-4">
        <SkeletonBlock className="h-10 w-64" />
        <SkeletonBlock className="h-6 w-80" />
        <SkeletonBlock className="h-6 w-72" />
      </div>

      <div className="space-y-3">
        <SkeletonBlock className="h-8 w-40" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-3/4" />
      </div>

      <div className="space-y-3">
        <SkeletonBlock className="h-8 w-32" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-20 w-full" />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <SkeletonBlock className="h-8 w-28" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>

      <SkeletonBlock className="h-6 w-40 mx-auto mt-10" />
    </div>
  )
}
