export const CommentPosition = {
    left: 0,
    right: 1,
} as const

export type CommentPosition = typeof CommentPosition[keyof typeof CommentPosition]
