
import SwiftUI

struct VStackExamplesView: View {
    var body: some View {
        List {
            VStack {
                Text("Item 1")
                Text("Item 2")
                Text("Item 3")
            }
            .navigationTitle("Default VStack")
            
            VStack(alignment: .leading, spacing: 10) {
                Text("Leading Aligned")
                Text("with 10pt spacing")
                Image(systemName: "arrow.right")
            }
            .navigationTitle("Styled VStack")
        }
        .navigationTitle("VStack Examples")
    }
}

struct VStackExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        VStackExamplesView()
    }
}
