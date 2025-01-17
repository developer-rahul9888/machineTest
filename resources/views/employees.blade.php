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
                    <ul>
                        @foreach ($employee->children as $child)
                            <li>{{ $child->name }}
                                @if ($child->children->count())
                                    @include('partials.employee-children', ['children' => $child->children])
                                @endif
                            </li>
                        @endforeach
                    </ul>
                    @endif
                </li>
            @endforeach
        </ul>
    </body>
</html>