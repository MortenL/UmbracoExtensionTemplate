namespace MySite.BackofficeExtension.Core.Services;
    
public enum OperationStatus
{
    Success,
    NotFound,
    UnknownIndexFieldName,
    DuplicateAlias,
    FailedCreate,
    FailedUpdate,
    FailedDelete
}