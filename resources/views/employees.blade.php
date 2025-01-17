<html !doctype>
    <head>
        <title>Employees</title>
    </head>
    <body>
        <h1>Employees</h1>

        <ul>
            @foreach ($employees as $employee)
                <li>{{ $employee->name }}
                    @if ($employee->children->count())
                        @include('partials.employee-children', ['children' => $employee->children])
                    @endif
                </li>
            @endforeach
        </ul>
    </body>
</html>