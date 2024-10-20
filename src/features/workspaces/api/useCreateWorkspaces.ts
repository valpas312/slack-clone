import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

type RequestType = { name: string };
type ResponseType = Id<"workspaces"> | null;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
    throwError?: boolean;
};

export const useCreateWorkspaces = () => {

    const [data, setData] = useState<ResponseType | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<"settled" | "pending" | "success" | "error" | null>(null);

    const isPending = status === "pending";
    const isError = status === "error";
    const isSuccess = status === "success";
    const isSettled = status === "settled";


    const mutation = useMutation(api.workspaces.create);
    const mutate = useCallback(async (values: RequestType, options?: Options) => {
        try {
            setData(null);
            setError(null);
            setStatus("pending");

            const response = await mutation(values);
            options?.onSuccess?.(response);
            return response;
        } catch (error) {
            options?.onError?.(error as Error);
            if (options?.throwError) {
                throw error;
            }
        } finally {
            setStatus("settled");
            options?.onSettled?.();
        }
    }, [
        mutation
    ])
    return {
        mutate,
        data,
        error,
        isPending,
        isError,
        isSuccess,
        isSettled
    };
};